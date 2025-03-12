body {
    font-family: Arial, sans-serif;
    background-color: #f3f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    text-align: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1 {
    margin-bottom: 20px;
}

#board {
    display: grid;
    grid-template-columns: repeat(4, 50px);
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
}

.cell {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
    font-size: 24px;
    font-weight: bold;
    background-color: #f9f9f9;
}

#guess-input {
    padding: 10px;
    font-size: 16px;
    width: 200px;
    margin-bottom: 10px;
}

#submit-btn {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#message {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}
