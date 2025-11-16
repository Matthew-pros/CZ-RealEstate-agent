
import streamlit as st
import streamlit.components.v1 as components
import os
import subprocess

# Set page config
st.set_page_config(
    page_title="Real Estate Arbitrage Platform",
    page_icon="🏠",
    layout="wide"
)

# Function to run shell commands
def run_command(command):
    try:
        result = subprocess.run(command, check=True, capture_output=True, text=True)
        st.write(result.stdout)
        st.write(result.stderr)
    except subprocess.CalledProcessError as e:
        st.error(f"Command '{' '.join(command)}' failed with return code {e.returncode}")
        st.error(e.output)
        st.error(e.stderr)
        st.stop()

# Build the React app
build_dir = "dist"
if not os.path.exists(build_dir):
    st.write("Building the React app...")
    run_command(["npm", "install"])
    run_command(["npm", "run", "build"])
    st.write("Build complete.")

# Embed the React app
st.title("Real Estate Arbitrage Platform")
st.markdown("---")

# Serve the built React app
index_html_path = os.path.join(build_dir, "index.html")
if os.path.exists(index_html_path):
    with open(index_html_path, "r", encoding="utf-8") as f:
        html_content = f.read()
    components.html(html_content, height=800, scrolling=True)
else:
    st.error("Please build the React app first using 'npm run build'")
    st.code("npm run build", language="bash")
