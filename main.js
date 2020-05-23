const submissionComponent = {
  template: `
    <div class="media border p-3" :class="{ 'blue-border': submission.votes >= 20 }">
    <img :src="submission.submissionImage" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:60px;">
    <div class="media-body">
        <strong>
            <a href="" class="text-warning">{{submission.title}}</a>
            <span class=""><mark>#{{submission.id}}</mark></span>
        </strong><br>
        <span>{{submission.description}}</span><br>
        <small>Submitted by:</small>
        <img :src="submission.avatar" style="width: 24px;" alt="">
       
    </div>
    <div class="float-right">
        <span class="icon" @click="upvote(submission.id)">
            <i class="fa fa-chevron-up"></i>
            <strong class="text-primary"></strong>{{submission.votes}}</strong>
        </span>
    </div>
    prinxard 2020
</div>
`,
  props: ["submission", "submissions"],
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        (submission) => submission.id === submissionId
      );
      submission.votes++;
    }
  }
};

new Vue({
  el: "#app",
  data: {
    submissions: submissions,
  },
  computed: {
    sortedSubmission() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  methods: {
    upvote(submissionId) {
      const submission = this.submissions.find(
        submission => submission.id === submissionId
      );
      submission.votes++;
    },
  },
  components: {
    "submission-component": submissionComponent,
  },
});
