export default function sizeEffect(
    text,
    options = { size: 20, limit: 100, duration: 2000 }
  ) {
    text.fontSize = `${options.size}px`;
    const interval = setInterval(() => {
      text.style.fontSize = `${++options.size}px`;
      if (options.size == options.limit) clearInterval(interval);
    }, options.duration);
  }
  