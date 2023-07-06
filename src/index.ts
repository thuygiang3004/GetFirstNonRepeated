const inputString = "abbcc";

const firstNonRepeated = (inputString: string): string => {
  const lowercaseString = inputString.toLowerCase();
  for (const char of lowercaseString) {
    const regex = new RegExp(char, "g");
    const occurenceCount = (lowercaseString.match(regex) || []).length;
    if (occurenceCount === 1) {
      return char;
    }
  }
  return "";
};

console.log(firstNonRepeated(inputString));
