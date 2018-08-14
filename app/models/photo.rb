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
  validate :ensure_photo

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :User

  has_many :likes,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Like

  has_one_attached :image

  def ensure_photo
    unless self.image.attached?
      errors[:image] << "Requires image"
    end
  end
end
