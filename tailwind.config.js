tailwind.config = {
    darkMode: 'class', // Toggle dark mode based on the `dark` class
    theme: {
      extend: {
        gridTemplateColumns: {
          control: 'repeat(auto-fit, minmax(200px, 1fr))',
        },
        fontFamily: {
          OutFit: ['Outfit', 'sans-serif'],
          Ovo: ['Ovo', 'serif'],
        },
        animation: {
          spin_slow: 'spin 6s linear infinite',
        },
        boxShadow: {
          black: '4px 4px 0 #000',
          white: '4px 4px 0 #fff',
        },
        colors: {
          lightHover: '#CFECF7',
          darkHover: '#2a004a',
          darkTheme: '#11001F', // Custom color for dark mode background
        },
      },
    },
  };
  