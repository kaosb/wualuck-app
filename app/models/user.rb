class User < ActiveRecord::Base
	# Asociaciones
	has_many :authentications, :dependent => :delete_all

	# Validaciones
	TEMP_EMAIL = 'change@me.com'
	TEMP_EMAIL_REGEX = /change@me.com/
	validates_format_of :email, :without => TEMP_EMAIL_REGEX, on: :update

	# Devise Settings
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable,
	:recoverable, :rememberable, :trackable, :validatable,
	:confirmable, :omniauthable

	# Metodos
	def self.find_for_oauth(auth, signed_in_resource = nil)
		#p "*** oauth info: #{auth.inspect}"
		# Get the authentication and user if they exist
		authentication = Authentication.find_for_oauth(auth)
		user = authentication.user
		if user.nil?
			# Get the existing user from email if the OAuth provider gives us an email
			user = User.where(:email => auth.info.email).first if auth.info.email
			# Create the user if it is a new registration
			if user.nil?
				user = User.new(
					#name: auth.extra.raw_info.name,
					username: auth.info.nickname || auth.uid,
					email: auth.info.email.blank? ? TEMP_EMAIL : auth.info.email,
					password: Devise.friendly_token[0,20]
				)
				#user.skip_confirmation!
				user.save!
			end
			# Associate the authentication with the user if not already
			if authentication.user != user
				authentication.user = user
				authentication.save!
			end
		end
		user
	end

end
