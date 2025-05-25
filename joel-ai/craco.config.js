module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [
        {
          module: /@mediapipe/,
          message: /Failed to parse source map/,
        }
      ],
    },
  },
};