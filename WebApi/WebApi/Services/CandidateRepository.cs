using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Services
{
    public class CandidateRepository : ICandidateRepository
    {
        private readonly DonationDBContext _donationDBContext1;
        public CandidateRepository(DonationDBContext donationDBContext)
        {
            _donationDBContext1 = donationDBContext;
        }

        public async Task<bool> CreateCandidate(Candidate candidate)
        {
            await _donationDBContext1.Candidates.AddAsync(candidate);
            return await _donationDBContext1.SaveChangesAsync() >= 0;
        }

        public async Task<bool> DeleteCandidate(int id)
        {
            var candidate = await _donationDBContext1.Candidates.FirstOrDefaultAsync(c => c.Id == id);
            if(candidate == null)
            {
                return false;
            }
            _donationDBContext1.Candidates.Remove(candidate);

            return await _donationDBContext1.SaveChangesAsync() >= 0;
        }

        public async Task<Candidate> GetCandidate(int id)
        {
            var candidate = await _donationDBContext1.Candidates.FirstOrDefaultAsync(c => c.Id == id);
            return candidate;
        }

        public async Task<ICollection<Candidate>> GetCandidates()
        {
            var candidates = await _donationDBContext1.Candidates.ToListAsync();
            return candidates;
        }

        public async Task<bool> UpdateCandidate(Candidate candidate)
        {
             _donationDBContext1.Candidates.Update(candidate);
            return await _donationDBContext1.SaveChangesAsync() >= 0;
        }
    }
}
