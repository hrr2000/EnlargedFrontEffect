import sizeEffect from '../Modules/sizeEffect.mjs';


describe('Check font size after specific time', () => {
    it('should be 30 px after 30 seconds', () => {
        const text = document.createElement('p');
        sizeEffect(text);
        setTimeout(() => {
            expect(text.style.fontSize).toBe('30px');
        }, 1000);
    });
});