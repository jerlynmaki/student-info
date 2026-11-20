<template>
  <div>
    <h1 class="page-title">Students</h1>
    <p class="page-lead">
      Each card below is the same StudentCard component, filled with different data through props.
    </p>
    <div class="grid">
      <StudentCard
        v-for="s in students"
        :key="s.studentId"
        :name="s.name"
        :student-id="s.studentId"
        :course="s.course"
        :year="s.year"
        :email="s.email"
        :button-color="s.buttonColor"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const students = useStudents()
</script>
