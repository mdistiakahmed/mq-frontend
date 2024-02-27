# Use the official PostgreSQL image as the base image
FROM postgres:latest

# Set environment variables for PostgreSQL
ENV POSTGRES_DB=mydatabase \
    POSTGRES_USER=myuser \
    POSTGRES_PASSWORD=mypassword

# Expose the default PostgreSQL port
EXPOSE 5432

# Start PostgreSQL server when the container starts
CMD ["postgres"]
