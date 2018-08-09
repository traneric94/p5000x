class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.text :description

      t.timestamps
    end
    add_index :photos, :author_id
  end
end
