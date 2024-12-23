---
layout: default
title: Quick Start
nav_order: 2
---

# Quick Start

Getting started with Captain is straightforward. Follow these simple steps to have your content management system up and running in minutes.

## Download and Run

1. Download the Captain binary for Linux:
   ```bash
   wget -c https://github.com/captain-corp/captain/releases/latest/download/captain_linux_amd64
   ```

2. Make the binary executable:
   ```bash
   chmod +x captain_linux_amd64
   ```

3. Run Captain:
   ```bash
   ./captain_linux_amd64
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080/
   ```

{: .note }
By default, Captain uses a local SQLite database and file storage. For production deployments, you might want to configure S3 storage and other options using the [Configuration Guide](configuration.html).

## What's Next?

Now that you have Captain running, you can:

1. **Configure Your Installation**
   - Review all available options in the [Configuration Guide](configuration.html)
   - Set up your database path and logging
   - Configure storage options (local or S3)
   - Customize security settings

2. **Create Your First Content**
   - Log in to the admin panel
   - Create a new post or page
   - Upload media files
   - Preview your content

3. **Customize Your Site**
   - Choose or install a theme
   - Configure site settings
   - Set up your domain

4. **Explore Advanced Features**
   - Learn about content organization
   - Set up S3 storage for media files
   - Configure caching and performance options

For detailed configuration options, including environment variables and the configuration file format, see the [Configuration Guide](configuration.html).
