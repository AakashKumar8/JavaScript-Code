module.exports = { generateSlug };

function generateSlug(title) {
    // Write your code inside this function only.
    // Convert the title to lowercase
    const lowercaseTitle = title.toLowerCase();

    // Replace spaces with hyphens
    const slug = lowercaseTitle.replace(/\s+/g, '-');

    // Return the generated slug
    return slug;
}