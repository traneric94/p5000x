# == Schema Information
#
# Table name: photos
#
#  id          :bigint(8)        not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_one_attached :image
end
