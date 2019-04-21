const DEFAULT_TEXT = 'A quick brown fox jumps over a lazy dog.',
    defaultStateCreator = dataCount => {
        let notes = [],
            i,
            randomMultiplier;

        for (i = 0; i < dataCount; i++) {
            randomMultiplier = Math.floor(Math.random() * 20) + 1;
            notes.push({
                id: i,
                text: DEFAULT_TEXT.repeat(randomMultiplier)
            })
        }

        return {
            notes
        };
    };

export default defaultStateCreator(16);
