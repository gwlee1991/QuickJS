Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "1946551442263156", "ff35da7ce044fdb67769b3020cbd9d8b"
end