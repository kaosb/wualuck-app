class Authentication < ActiveRecord::Base
	# Asociaciones
	belongs_to :user
	# Validaciones
	validates_presence_of :user_id, :uid, :provider
	validates_uniqueness_of :uid, :scope => :provider

	#Metodo
	def self.find_for_oauth(auth)
		identity = find_by(provider: auth.provider, uid: auth.uid)
		if identity.nil?
			identity = create(uid: auth.uid, provider: auth.provider, token: auth.credentials.token)
		end
		identity
	end
end
