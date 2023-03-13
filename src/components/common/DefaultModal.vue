<script setup lang="ts"></script>

<template>
  <div class="wrap">
    <div class="modal">
      <div>
        <h3>
          <slot name="title"></slot>
        </h3>
        <p>
          <slot name="content"></slot>
        </p>
      </div>
      <div class="buttons">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 300px;
  min-height: 300px;
  background-color: var(--white);
  border-radius: 20px;
  padding: 50px 40px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 6px;
  color: var(--black);
  text-align: center;
}

p {
  font-size: 0.875rem;
  color: var(--color-primary);
  font-weight: 700;
  text-align: center;
}
</style>
