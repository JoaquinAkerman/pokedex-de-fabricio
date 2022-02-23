module.exports = {
  verbose: true,
  rootDir: 'src',
  coverageDirectory: '../coverage/',
  testPathIgnorePatterns: [
    '/node_modules/',
    '.*fixture.js',
    'fixtureDe20Pokemones.js',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '.*fixture.js'],
};
