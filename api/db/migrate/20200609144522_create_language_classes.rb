class CreateLanguageClasses < ActiveRecord::Migration
  def change
    create_table :language_classes do |t|
      t.string :name
      t.integer :twelve_month_price
      t.string :do_creds
      t.string :pa_creds
      t.string :cne_creds

      t.timestamps null: false
    end
  end
end
