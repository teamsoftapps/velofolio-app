require 'xcodeproj'

project_path = ARGV[0]
unless project_path
  puts "Usage: ruby remove_ttf_from_pbxproj.rb <path_to_xcodeproj>"
  exit 1
end

project = Xcodeproj::Project.open(project_path)
modified = false

project.targets.each do |target|
  target.resources_build_phase.files.each do |file|
    if file.file_ref && file.file_ref.path && file.file_ref.path.end_with?('.ttf')
      puts "Removing #{file.file_ref.path} from target #{target.name}"
      file.remove_from_project
      modified = true
    end
  end
end

if modified
  project.save
  puts "Successfully removed TTF files and saved project."
else
  puts "No TTF files found in Copy Bundle Resources phase."
end
