
const itemS = function (duration: any, direction?: any, scale?: number) {
    const safe_direction = direction ?? 1
    const safe_scale = scale ?? 1

    return ({
        hidden: { opacity: 0, x: safe_direction * -120, scale: safe_scale },
        show: {

            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: duration
            },
        },
    });
};

export default itemS; 
