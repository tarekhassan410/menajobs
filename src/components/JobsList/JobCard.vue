<template>
  <div class="card-container">
    <div class="position-details">
      <div class="company-name">
        <h4>{{ company }}</h4>
      </div>
      <div class="position">
        <h3>
          <router-link class="to-job-post" :to="{ path: 'Job/' + id }">{{ position }}</router-link>
        </h3>
      </div>
      <div class="post-timing-details">
        <p>1d ago . full time</p>
      </div>
    </div>
    <div class="tags">
      <span v-for="tag in tags" :key="tag" class="position-tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["position", "tags", "company", "id"]
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.1),
    0 10px 10px 0px rgba(0, 0, 0, 0.1);
  margin-top: 1.2rem;
  background-color: white;
  padding: 1.6rem 1.6rem;
  border-radius: 0.3rem;
  transition: all 0.2s ease;
}
.card-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 10px 0px rgba(0, 0, 0, 0.1),
    0 10px 10px 0px rgba(0, 0, 0, 0.1), 10px 10px 10px 0px rgba(0, 0, 0, 0.1);
}
.company-name {
  color: rgb(88, 82, 82);
}
.post-timing-details {
  color: grey;
}
.position-details {
  flex: 2 1 1rem;
}
.position {
  margin: 0.2rem 0;
  cursor: pointer;
}
.to-job-post {
  text-decoration: none;
  color: #5ea4a4;
}

.position:hover {
  color: #5ea4a4;
}
.tags {
  flex: 4 1 1rem;
  text-align: right;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
}
.position-tag {
  background: #e9f7f6;
  color: #5ea4a4;
  margin: 0.2rem 0.5rem 0.2rem 0rem;
  padding: 0.2rem 0.8rem;
  border-radius: 0%;
  cursor: pointer;
  font-weight: bold;
}
.position-tag:hover {
  color: #e9f7f6;
  background: #5ea4a4;
}
@media only screen and (max-width: 950px) {
  .card-container {
    font-size: 1rem;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 1rem;
  }

  .tags {
    margin-top: 1rem;
    align-self: flex-start;
  }
}
@media only screen and (max-width: 600px) {
  .card-container {
    font-size: 0.75rem;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 0.5rem;
  }

  .tags {
    margin: 0;
    margin-top: 1rem;
  }

  .position-tag {
    margin: 0;
    margin-right: 0.2rem;
  }
}
</style>