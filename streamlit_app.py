import streamlit as st
import streamlit.components.v1 as components
import os

# Set page config
st.set_page_config(
    page_title="Real Estate Arbitrage Platform",
    page_icon="🏠",
    layout="wide"
)

# Embed the React app
st.title("Real Estate Arbitrage Platform")
st.markdown("---")

# Serve the built React app
if os.path.exists("dist/index.html"):
    with open("dist/index.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    components.html(html_content, height=800, scrolling=True)
else:
    st.error("Please build the React app first using 'npm run build'")
    st.code("npm run build", language="bash")
