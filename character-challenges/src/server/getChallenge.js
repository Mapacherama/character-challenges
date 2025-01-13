export async function getChallenge() {
    const challenges = [
      { id: 1, character: 'Luffy', task: 'Stretch your body! Do 5 jumping jacks and laugh as loud as you can!' },
      { id: 2, character: 'Ussop', task: 'Draw a quick doodle of something silly and share it with a friend.' },
      { id: 3, character: 'Superman', task: 'Help someone today, even if it’s as small as holding a door open.' },
      { id: 4, character: 'Batman', task: 'Solve a riddle or write your own!' },
      { id: 5, character: 'SpongeBob & Patrick', task: 'Find something fun to do for 5 minutes—blow bubbles, sing, or just be goofy!' },
    ];
    const randomIndex = Math.floor(Math.random() * challenges.length);
    return challenges[randomIndex];
  }