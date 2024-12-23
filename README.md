# Captain Documentation Website

This repository contains the documentation for [Captain](https://github.com/captain-corp/captain), a modern content management system focused on simplicity and performance. The documentation is built using Jekyll and the Just the Docs theme.

## Features

- Comprehensive documentation for Captain
- Clean, searchable interface
- Mobile-friendly design
- Both standalone landing page and detailed documentation
- Docker-based development environment

## Prerequisites

- Docker
- Make (optional, but recommended)

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/captain-corp/captain-website.git
   cd captain-website
   ```

2. Start the development server:
   ```bash
   make start
   ```

   The documentation will be available at http://localhost:4000

## Available Commands

- `make start` - Start the documentation server
- `make start-detached` - Start the server in background mode
- `make stop` - Stop the documentation server
- `make build` - Build the Docker image
- `make build-static` - Generate static HTML files
- `make serve-static` - Serve the static files locally
- `make serve-standalone` - Serve the standalone landing page
- `make clean` - Remove built files and Docker artifacts
- `make shell` - Open a shell in the container

## Project Structure

```
captain-website/
├── Dockerfile              # Docker configuration
├── Gemfile                # Ruby dependencies
├── _config.yml            # Jekyll configuration
├── docker-compose.yml     # Docker Compose configuration
├── index.md               # Homepage content
├── quickstart.md          # Quick start guide
├── configuration.md       # Configuration documentation
└── standalone/            # Standalone landing page
    └── index.html         # Single-page site
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

### Adding New Pages

1. Create a new Markdown file in the root directory
2. Add front matter with layout and navigation order:
   ```yaml
   ---
   layout: default
   title: Your Page Title
   nav_order: 4
   ---
   ```
3. Add your content using Markdown

### Building Static Files

To build static files for deployment:

```bash
make build-static
```

The files will be generated in the `_site` directory.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Jekyll](https://jekyllrb.com/) - Static site generator
- [Just the Docs](https://just-the-docs.github.io/just-the-docs/) - Documentation theme
- [Docker](https://www.docker.com/) - Containerization platform
