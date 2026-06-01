<template>
  <header class="app-header">
    <RouterLink to="/" class="app-header__logo">
      <img src="@/assets/CookBook-horizontal.png" alt="CookBook logo" />
    </RouterLink>

    <nav class="app-header__nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/lists">All Recipes</RouterLink>
      <RouterLink to="/lists/new">Add recipe</RouterLink>
    </nav>
  </header>
</template>
<style scoped lang="scss">
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  padding: 16px 32px;
  margin-bottom: 32px;

  background-color: #FCD9DB;
  border-bottom: 1px solid #ead8c0;
  box-shadow: 0 8px 24px rgba(92, 58, 33, 0.12);
}

.app-header__logo {
  display: flex;
  align-items: center;
  width: 168px;
  height: 56px;

  img {

    height: 100%;
    width: 100%;
    display: block;
    object-fit: none;
  }
}

.app-header__nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;

  background: rgba(255, 248, 238, 0.55);
  border-radius: 999px;

  a {
    padding: 10px 18px;

    color: #4b2f22;
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;

    border-radius: 999px;
    transition: 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.65);
    }

    &.router-link-active {
      background: #0f6f6c;
      color: #fff;
      box-shadow: 0 4px 12px rgba(15, 111, 108, 0.25);
    }
  }
}
</style>