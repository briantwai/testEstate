from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

app = FastAPI()

# Enable CORS for React dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/hello")
def read_root():
    return {"message": "Hello from Python backend!"}

@app.get("/api/getcompanyfiles")
def get_company_files():
    ##TODO: make this work
    return ["mock file 1", "mock file 2"]

# Serve React build in production
build_dir = os.path.join(os.path.dirname(__file__), "../static")
if os.path.exists(build_dir):
    app.mount("/", StaticFiles(directory=build_dir, html=True), name="static")
