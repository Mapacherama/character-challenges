export async function getChallenge() {
    const challenges = [
      { id: 1, character: 'Luffy', task: 'Stretch your body! Do 5 jumping jacks and laugh as loud as you can!' },
      { id: 2, character: 'Ussop', task: 'Draw a quick doodle of something silly and share it with a friend.' },
      { id: 3, character: 'Superman', task: 'Help someone today, even if it’s as small as holding a door open.' },
      { id: 4, character: 'Batman', task: 'Solve a riddle or write your own!' },
      { id: 5, character: 'SpongeBob & Patrick', task: 'Find something fun to do for 5 minutes—blow bubbles, sing, or just be goofy!' },
      { id: 6, character: 'Saitama', task: 'Do 10 push-ups as fast as you can and shout "I’m just a hero for fun!"' },
      { id: 7, character: 'Goku', task: 'Challenge a friend to a playful competition (thumb wrestling, trivia, etc.)!' },
      { id: 8, character: 'Kamina', task: 'Say something motivational to yourself or a friend, and strike a dramatic pose!' },
      { id: 9, character: 'Majin Buu', task: 'Treat yourself to something sweet and share a smile with someone!' },
      { id: 10, character: 'Shaggy Rogers', task: 'Eat a "Scooby Snack" (or your favorite snack) and imagine you’re a mystery-solving legend.' },
      { id: 11, character: 'Franky', task: 'Build something silly out of household items, even if it’s just stacking cups!' },
      { id: 12, character: 'Koro-Sensei', task: 'Set a timer and try to complete a small task in under 60 seconds!' },
      { id: 13, character: 'Shin Chan', task: 'Make a funny face or say something silly to brighten someone’s day!' },
      { id: 14, character: 'Deadpool', task: 'Crack a joke or do a funny impression to make someone laugh today!' },
      { id: 15, character: 'The Mask', task: 'Dance like nobody’s watching for at least one minute!' },
      { id: 16, character: 'Homer Simpson', task: 'Find something simple to appreciate today, like a delicious snack or a comfy chair.' },
      { id: 17, character: 'Shrek', task: 'Say something in your best ogre voice and embrace your inner uniqueness!' },
      { id: 18, character: 'Kung Fu Panda (Po)', task: 'Try a new stretch or yoga pose while thinking about your favorite food!' },
      { id: 19, character: 'Ernest P. Worrell', task: 'Make up a silly song about your day so far and sing it out loud!' },
      { id: 20, character: 'Inspector Clouseau', task: 'Try to speak in a funny accent while solving a small task like organizing a drawer!' },
      { id: 21, character: 'Ron Stoppable', task: 'Take 5 minutes to try something you’ve never done before, no matter how small!' },
      { id: 22, character: 'Kirby', task: 'Pretend to "inhale" your favorite item in the room and say what ability it gives you!' },
      { id: 23, character: 'Wario', task: 'Do a silly laugh (like "WAAAH!") and think of one way to outsmart a challenge today.' },
      { id: 24, character: 'Crash Bandicoot', task: 'Spin in a circle 5 times and then try walking straight to test your balance!' },
      { id: 25, character: 'Donkey Kong', task: 'Beat your chest a few times and think of something you’re proud of today!' },
      { id: 26, character: 'Groot', task: 'Find a plant or tree and say "I am Groot" to it, then give it a gentle touch.' },
      { id: 27, character: 'Hercules', task: 'Lift or carry something heavy (but safe!) and say, "I’m stronger than I thought!"' },
      { id: 28, character: 'Banjo and Kazooie', task: 'Make a funny noise or whistle while doing something productive today!' },
      { id: 29, character: 'Strong Bad', task: 'Write a short, funny email or message to a friend and make them smile!' },
      { id: 30, character: 'Papyrus', task: 'Create a goofy spaghetti-related pun and tell it to someone!' },
      { id: 31, character: 'Mario', task: 'Jump as high as you can three times and shout "Let’s-a go!"' }
    ];
    const randomIndex = Math.floor(Math.random() * challenges.length);
    return challenges[randomIndex];
  }