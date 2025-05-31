# 📝 Lifestyle Survey App

This is an api that allows individuals to fill out a survey about their lifestyle preferences. The app collects data and displays summarized survey results. It is designed to run in public areas and does not require user accounts or logins.

---

## 📦 Tech Stack


- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)


---


## 🚀 Features

- Submit personal details and lifestyle preferences
- Validates all fields before submission
- Stores data in MongoDB
- View analytics:
  - Total surveys completed
  - Average, oldest, and youngest participant age
  - % of people who prefer Pizza, Pasta, and Pap & Wors
  - Average ratings for Eat Out, Movies, TV, Radio

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/09Jeanette/lifestyle-survey-app-api.git
cd lifestyle-survey-app-api
npm i
```

#### Create a .env file
```bash
PORT=your_port
MONGO_URI=your_connection_string
```

### Run the server

```bash
npx nodemon server.js
```




