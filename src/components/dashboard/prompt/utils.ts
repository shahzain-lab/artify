export const extractMentions = (value: string, cursorPosition: number) => {
    const mentions: { symbol: string; value: string }[] = [];
    const regex = /(?:^|\s)([@#][^\s]*)/g;
    let match;
    while ((match = regex.exec(value)) !== null) {
      if (match.index < cursorPosition) {
        mentions.push({
          symbol: match[1][0],
          value: match[1].substring(1),
        });
      } else {
        break;
      }
    }
    return mentions;
  };