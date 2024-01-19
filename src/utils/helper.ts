export function pad(input: string, length: number): string {
  const { length: inputLength } = input;

  if (inputLength >= length) {
    return input;
  }

  const zeros: string = '0'.repeat(length - inputLength);

  return `${zeros}${input}`;
}

export function capitalize(input: string): string {
  if (!input) {
    return input;
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
}