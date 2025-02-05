<!-- Diseñado por Uiverse -->
<template>
    <button class="button" type="button">
      <div class="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          height="25px"
          width="25px"
        >
          <path
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            fill="#000000"
          ></path>
          <path
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            fill="#000000"
          ></path>
        </svg>
      </div>
      <p class="text">Volver</p>
    </button>
  </template>
  
  <style scoped>
  .button {
    background-color: white;
    text-align: center;
    width: 192px;
    height: 56px;
    position: relative;
    color: black;
    font-size: 20px;
    font-weight: 600;
    border-radius: 16px;
    overflow: hidden;
    border: none;
    cursor: pointer;
  }
  
  .icon-container {
    background: linear-gradient(144deg,#f5bb4f, #f7d956 50%,#f5c253);
    border-radius: 12px;
    height: 48px;
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 4px;
    top: 4px;
    transition: width 0.5s;
    z-index: 10;
  }
  
  .button:hover .icon-container {
    width: 184px;
  }
  
  .text {
    transform: translateX(8px);
  }
  </style>
  
  