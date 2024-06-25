#
# MongoDB Dockerfile
# Use the official MongoDB image as the base image
FROM mongo:4.4

# Copy seed data or any custom configuration (if needed)
COPY ./place-city.js /docker-entrypoint-initdb.d/

# Expose the default MongoDB port
EXPOSE 27017

# RUN ["chmod", "+x", "database.sh"]

# Command to run MongoDB
CMD ["mongod"]

# RUN ["./database.sh"]
