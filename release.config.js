const config = {
  branches: ['main'],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    '@semantic-release/git',
    "@semantic-release/github",
    "@semantic-release/npm"
  ]
}

module.exports = config;