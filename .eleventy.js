
const { DateTime } = require("luxon"); //needed for time format

module.exports = function(eleventyConfig){
    
    eleventyConfig.addPassthroughCopy('./src/style.css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/admin')

    eleventyConfig.addFilter("postDate", (dateObj) => {  //time format function
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}