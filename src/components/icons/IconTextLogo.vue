<template>
  <p class="textLogo">
    24<br />
    Hours<br />
    Are<br />
    Not<br />
    Enough
  </p>
</template>

<style scoped>
.textLogo {
  position: relative;
  font-size: 1.25rem;
  line-height: 1.2;
  font-weight: 700;
}
.textLogo::after {
  content: "";
  display: block;
  position: absolute;
  top: 26px;
  left: 56px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--color-secondary);
}
</style>
