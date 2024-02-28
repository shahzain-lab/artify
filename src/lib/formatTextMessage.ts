export function formatTextMessage(message: string) {
    // Regular expressions to match usernames and hashtags
    const usernameRegex = /@(\w+)/g;
    const hashtagRegex = /#(\w+)/g;
  
    // Function to replace matches with bold tags
    const boldify = (match: string) => `<b class="text-blue">${match}</b>`;
  
    // Replace usernames with bold usernames
    const messageWithBoldUsernames = message.replace(usernameRegex, boldify);
  
    // Replace hashtags with bold hashtags
    const messageWithBoldHashtags = messageWithBoldUsernames.replace(hashtagRegex, boldify);
  
    return messageWithBoldHashtags;
  }