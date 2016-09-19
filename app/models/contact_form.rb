class ContactForm < MailForm::Base
  attribute :email, validate: /\A\S+@.+\.\S+\z/
  attribute :subject, validate: true
  attribute :message, validate: true
end
