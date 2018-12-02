function materialDesignShadow(dp, {hsl, rgb}={}) {
    const colorParam  = hsl || rgb ||'0 0 0';
    if (dp == 0) {
        return "none";
    } else {
        let shadow = "";

        const ambientY = dp;
        const ambientBlur = dp == 1 ? 3 : dp * 2;
        const ambientAlpha = (dp + 10 + (dp / 9.38)) / 100;
        const ambientcolor = hsl ? `hsla(${colorParam.replace(/ /g,"%,")},${ambientAlpha})` : `rgba(${colorParam.replace(/ /g ,",")},${ambientAlpha})`

        shadow +=`${ambientY}px ${ambientBlur}px ${ambientcolor} 0px `  ;

        const directY = (dp < 10 ? (dp % 2 == 0 ? dp - ((dp / 2) - 1) : (dp - ((dp - 1) / 2))) : dp - 4);
        const directBlur = dp == 1 ? 3 : dp * 2;
        const directAlpha = (24 - Math.round(dp / 10)) / 100;
        const directColor = hsl ? `hsla(${colorParam.replace(/ /g,"%,")},${directAlpha})` : `rgba(${colorParam.replace(/ /g ,",")},${directAlpha})`
        shadow += `${directY}px ${directBlur}px ${directColor}`

        return shadow
    }
}
export default materialDesignShadow
