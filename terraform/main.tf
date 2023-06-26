# https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.67"
    }
  }
}

# provider "aws" {
#   region     = "region"
#   access_key = "access_key"
#   secret_key = "access_key"
# }

resource "aws_instance" "app_server" {

  # https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/instance

  ami           = "ami-01edeee178608e9b2"
  instance_type = "t2.large"
  key_name      = "group-c-language-learning-game-github"

  root_block_device {
    volume_size = 20
    volume_type = "gp3"
  }

  security_groups = ["group-c-language-learning-game"]

  tags = {
    Name  = "group-c-language-learning-game-server"
    Owner = "Maksims"
    Group = "C"
  }
}
