# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
  language_classes = LanguageClass.create([
    { name: 'All 3 Levels', twelve_month_price: 495, do_creds: "45", pa_creds: "45", cne_creds: "54" },
    { name: 'Level 1', twelve_month_price: 195, do_creds: "15", pa_creds: "15", cne_creds: "18" },
    { name: 'Level 2', twelve_month_price: 195, do_creds: "15", pa_creds: "15", cne_creds: "18" },
    { name: 'Level 3', twelve_month_price: 195, do_creds: "15", pa_creds: "15", cne_creds: "18"}
  ])
