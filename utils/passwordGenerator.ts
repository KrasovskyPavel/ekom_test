interface PasswordOptions {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    avoidRepetition: boolean;
  }
  
  export const generatePassword = (length: number = 8, options: PasswordOptions): string => {
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "%*?)@#$~";
    
    let availableChars = "";
    if (options.uppercase) availableChars += upperChars;
    if (options.lowercase) availableChars += lowerChars;
    if (options.numbers) availableChars += numbers;
    if (options.symbols) availableChars += symbols;
  
    if (!availableChars) return "";
  
    let password = "";
    const usedChars = new Set<string>();
  
    while (password.length < length) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      const randomChar = availableChars[randomIndex];
  
      if (options.avoidRepetition && usedChars.has(randomChar)) {
        continue;
      }
  
      password += randomChar;
      usedChars.add(randomChar);
    }

    return password;
  };
  