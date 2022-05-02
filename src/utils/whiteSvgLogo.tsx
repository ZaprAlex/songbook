import React, { useEffect, useRef, useState } from 'react';
import camelCase from 'lodash/camelCase';

type Props = {
    url: string;
    changeColor?: boolean;
};

function setWhiteFileForChild(el: Element) {
    const fill = el.getAttribute('fill');
    if (fill && fill !== 'none') {
        el.setAttribute('fill', '#ffffff');
    }
    const child = el.children;

    if (child.length) {
        for (let i = 0; i < child.length; i++) {
            setWhiteFileForChild(child[i]);
        }
    } else {
        el.nodeName === 'path' && el.setAttribute('fill', '#000000');
    }
}

function getAllSvgAttributes(svgNode: Element) {
    const attributes: Record<string, string> = {};
    const attrs = svgNode.attributes;
    for (let i = 0; i < attrs.length; i++) {
        const attr = attrs[i];
        attributes[camelCase(attr.name)] = attr.value;
    }
    return attributes;
}

const WhiteSvgLogo: React.FC<Props> = ({ url, changeColor }) => {
    const isSvg = url?.endsWith('.svg');
    const svgContainerRef = useRef<SVGSVGElement | null>(null);
    const svgElem = useRef<string>('');
    const svgElemWhite = useRef<string>('');
    const fileError = useRef(false);
    const [svgAttributes, setSvgAttributes] = useState<Record<string, string>>({});
    const [savedUrl, setSavedUrl] = useState<string>(url);

    const currentSvg = changeColor ? svgElemWhite : svgElem;

    useEffect(() => {
        let isMounted = true;

        const tryPaintSVG = async () => {
            try {
                let svg = svgElem.current;
                if (savedUrl !== url || (!svg && !fileError.current)) {
                    setSavedUrl(url);
                    const svgContainer = document.createElement('div');
                    const response = await fetch(url);
                    const svgString = await response.text();
                    if (!svgString || typeof svgString !== 'string') {
                        throw 'Something wrong with svg image';
                    }
                    svgContainer.innerHTML = svgString;
                    svgElem.current = svgString;
                    const svgNode = svgContainer.firstElementChild;
                    svgNode && setWhiteFileForChild(svgNode);
                    if (svgNode) {
                        isMounted && setSvgAttributes(getAllSvgAttributes(svgNode));
                        setWhiteFileForChild(svgNode);
                        svg = svgNode.innerHTML;
                        svgElemWhite.current = svg;
                    }
                }
                if (currentSvg.current && svgContainerRef.current) {
                    svgContainerRef.current.innerHTML = currentSvg.current;
                }
            } catch (e) {
                fileError.current = true;
                console.error(e);
            }
        };

        if (isSvg) {
            tryPaintSVG();
        }

        return () => {
            isMounted = false;
        };
    }, [changeColor, url, savedUrl]);

    return !fileError.current && isSvg ? (
        <svg ref={svgContainerRef} {...svgAttributes} />
    ) : (
        <img src={url} alt="" />
    );
};

export default WhiteSvgLogo;
