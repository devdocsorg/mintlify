import os
import re

# Directory to start crawling from
root_directory = "./docs/"

# Regex pattern to match the Screenshot component with and without the 'disabled' attribute
screenshot_pattern = r'<Screenshot([^>]*)fn="([^"]+)"([^>]*)\/>'

# Function to convert the Screenshot component to markdown if not disabled
def convert_screenshot(match):
    attributes_before_fn = match.group(1)
    file_name = match.group(2)
    attributes_after_fn = match.group(3)
    
    # Check if the disabled attribute is present
    if 'disabled={true}' in attributes_before_fn or 'disabled={true}' in attributes_after_fn:
        return match.group(0)  # Return the original if disabled

    # Extract the alt text if present (look for alt="...")
    alt_text_match = re.search(r'alt="([^"]+)"', attributes_after_fn)
    alt_text = alt_text_match.group(1) if alt_text_match else "Screenshot"

    # Convert to markdown
    new_format = f'![{alt_text}](/{file_name})'
    return new_format

# Function to process a single file
def process_file(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    # Apply the conversion using regex substitution
    new_content = re.sub(screenshot_pattern, convert_screenshot, content)

    # Write the updated content back to the file if there was any change
    if new_content != content:
        with open(file_path, 'w') as file:
            file.write(new_content)
        print(f"Updated file: {file_path}")

# Function to crawl through directories and process files
def crawl_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".mdx") or file.endswith(".jsx") or file.endswith(".md"):
                file_path = os.path.join(root, file)
                process_file(file_path)

# Start the crawling and conversion process
crawl_directory(root_directory)
