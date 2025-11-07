# testEstate

# After downloading & unzipping
Backend:

cd backend
uvicorn app.main:app --reload --port 8000


Frontend:
cd house-info
npm install
npm run dev
http://localhost:5173

or:
cd frontend
npm run build

Given more time, I would use the time to create a database of files for various companies and do something with the data. Ideally the data would be stored in some kind of storage (we have a lot, so I'm thinking some nosql key/other storage)