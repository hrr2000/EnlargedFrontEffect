export default function sizeEffect(
    element, { size = 20, limit = 100, duration = 1000 }
) {
    element.fontSize = `${size}px`;
    const interval = setInterval(() => {
        element.style.fontSize = `${++size}px`;
        if (size == limit) clearInterval(interval);
    }, duration);
}