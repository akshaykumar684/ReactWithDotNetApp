using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public interface ICandidateRepository
    {
        Task<ICollection<Candidate>> GetCandidates();
        Task<Candidate> GetCandidate(int id);
        Task<bool> CreateCandidate(Candidate candidate);
        Task<bool> UpdateCandidate(Candidate candidate);
        Task<bool> DeleteCandidate(int id);
    }
}
