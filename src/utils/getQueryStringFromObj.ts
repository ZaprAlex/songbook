type Params = {
    [key: string]: string | null;
};

type Result = {
    [key: string]: string;
};

export default function getQueryStringFromObj<T extends Partial<Params>>(obj: T) {
    const cleanObj = Object.keys(obj).reduce<Result>((result, key) => {
        if (obj[key]) {
            result[key] = obj[key] as string;
        }

        return result;
    }, {});

    return new URLSearchParams(cleanObj).toString();
}
