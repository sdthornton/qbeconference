const STRENGTH_TEXT = {
  0: "",
  1: "Weak",
  2: "So-so",
  3: "Good",
  4: "Great"
};

window.QBE = window.QBE || {};
QBE.Password = class Password {
  constructor() {
    this.newUserForm = document.getElementById('new_user');
    this.passwordStrengthNode = this.newUserForm.querySelector('#password_strength');
    this.passwordNode = this.newUserForm.querySelector('#user_password');
    this.passwordReviewNode = this.passwordStrengthNode.querySelector('.o-password-strength__review');
    this.passwordRecsNode = this.passwordStrengthNode.querySelector('.o-password-strength__recommendations');
    this.passwordStrength = this.passwordStrengthNode.dataset.strength;
    this.passwordWarning = "";
    this.passwordRecommendations = [];

    this.passwordNode.addEventListener('input', () => this.onInput(), false);
  }

  onInput() {
    const review = zxcvbn(this.passwordNode.value);
    this.passwordStrength = review.score;
    this.passwordWarning = review.feedback.warning;
    this.passwordRecommendations = review.feedback.suggestions;

    this.passwordStrengthNode.dataset.strength = this.passwordStrength;
    this.passwordReviewNode.dataset.strengthText = STRENGTH_TEXT[this.passwordStrength];

    if (this.passwordRecommendations.length) {
      this.passwordRecsNode.classList.remove('u-hide');

      let recommendationText = "";
      if (this.passwordWarning) {
        recommendationText += `${this.passwordWarning}. `;
      }

      this.passwordRecsNode.setAttribute('aria-label', (() => {
        this.passwordRecommendations.forEach((recommendation) => {
          recommendationText += `${recommendation.replace(/\.$/, '')}. `;
        });
        return recommendationText;
      }()));

    } else {
      this.passwordRecsNode.classList.add('u-hide');
    }
  }
}
