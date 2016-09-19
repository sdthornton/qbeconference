class ContactController < ApplicationController

  def index
    @contact_form = ContactForm.new
  end

  def post
    puts 'foobar'
    puts params
    @contact_form = ContactForm.new(contact_form_params)
    if verify_recaptcha(model: @contact_form)
      @contact_form.deliver
    end
  end

private

  def contact_form_params
    params.require(:contact_form).permit(:email, :subject, :message)
  end

end
